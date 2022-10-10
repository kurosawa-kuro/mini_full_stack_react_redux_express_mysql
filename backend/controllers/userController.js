const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
    const inputData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    if (!inputData.name || !inputData.email || !inputData.password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    // Check if user exists
    const userExists = await User.findOne({ where: { email: inputData.email } });

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    // Hash password
    inputData.password = await generateHash(inputData.password)

    // Create user
    const user = await User.create(inputData)

    if (user) {
        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user.id),
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc    Authenticate a user
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
    const inputData = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }

    // Check for user email
    const userWithEmail = await User.findOne({ where: { email: inputData.email } })

    if (userWithEmail && (await bcrypt.compare(inputData.password, userWithEmail.password))) {

        const resData = {
            id: userWithEmail.id,
            name: userWithEmail.name,
            email: userWithEmail.email,
            token: generateToken(userWithEmail.id),
        }

        res.json(resData)
    } else {
        res.status(400)
        throw new Error('Invalid credentials')
    }
})

// @desc    Get user data
// @route   GET /api/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
    const resData = { user: req.user }
    res.status(200).json(resData)
})

// Generate Hash
const generateHash = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe,
}
