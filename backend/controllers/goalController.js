const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc    Get goals
// @route   GET /api/goals
const getGoals = asyncHandler(async (req, res) => {
    const resData = await Goal.findAll();
    console.log({ resData })

    res.status(200).json("goals")
})

// @desc    Set goal
// @route   POST /api/goals
const setGoal = asyncHandler(async (req, res) => {
    console.log("setGoal")
    const inputData = {
        text: req.body.text
    }

    if (!inputData.text) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const resData = await Goal.create(inputData)

    // console.log({ resData })

    res.status(200).json(resData)
})

// @desc    Update goal
// @route   PUT /api/goals/:id
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

    const resData = await Goal.update(inputData, {
        where: { id }
    });

    // console.log({ resData })

    res.status(200).json(resData)
})

// @desc    Delete goal
// @route   DELETE /api/goals/:id
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
