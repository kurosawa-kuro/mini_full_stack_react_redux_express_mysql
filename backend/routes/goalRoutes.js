const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
    getGoalsWithoutUser,
    setGoalWithoutUser,
    updateGoalWithoutUser,
    deleteGoalWithoutUser,
} = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal)

router.route('/without_user').get(getGoalsWithoutUser).post(setGoalWithoutUser)
router.route('/without_user/:id').delete(deleteGoalWithoutUser).put(updateGoalWithoutUser)

module.exports = router
