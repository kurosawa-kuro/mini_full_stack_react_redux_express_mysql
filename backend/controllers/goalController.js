const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asyncHandler(async (req, res) => {
    const resData = await Goal.findAll();
    console.log({ resData })

    res.status(200).json(resData)
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asyncHandler(async (req, res) => {
    const inputData = {
        text: req.body.text
    }

    if (!inputData.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    inputData.user_id = req.user.id

    const resData = await Goal.create(inputData)

    // console.log({ resData })

    res.status(200).json(resData)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const inputData = {
        text: req.body.text
    }

    const goal = await Goal.findByPk(id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    // Check for user
    if (!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Make sure the logged in user matches the goal user
    if (goal.user_id !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
    }

    const resData = await Goal.update(inputData, {
        where: { id }
    });

    // console.log({ resData })

    res.status(200).json(resData)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
// @access  Private
const deleteGoal = asyncHandler(async (req, res) => {
    const id = req.params.id;
    const goal = await Goal.findByPk(id);

    if (!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    const resData = await Goal.destroy({
        where: { id }
    });

    res.status(200).json({ resData })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
}
