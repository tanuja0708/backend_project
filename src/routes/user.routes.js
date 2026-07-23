import { Router } from "express";
import {
        loginUser,
        logoutUser,
        registerUser, 
        refreshAccessToken, 
        changeCurrentPassword, 
        getCurrentUser, 
        updateAccountDetails, 
        updateUserAvatar, 
        updateUserCoverImage, 
        getUserChannelProfile, 
        getWatchHistory
    } 
from "../controllers/user.controllers.js";

import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.route("/register").post(
    upload.fields([  // this is an middleware before executing the post method we go through the middleware --now you can send images
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser)

router.route("/login").post(loginUser)

//secured routes

router.route("/logout").post(verifyJWT, logoutUser)   // as you can see post has two fns to run the next in verifyjWT tells the browser to move to the next fn

router.route("/refersh-token").post(refreshAccessToken)

router.route("/change-password").post(verifyJWT, changeCurrentPassword)

router.route("/current-user").get(verifyJWT, getCurrentUser)

router.route("/update-account").patch(verifyJWT,updateAccountDetails) //do not put post as all the details will get update use patch

router.route("/avatar").patch(verifyJWT, upload.single("avatar"), updateUserAvatar) //using patch as single field is updated

router.route("/coverImage").patch(verifyJWT, upload.single("/coverImage"), updateUserCoverImage)

router.route("/c/:username").get(verifyJWT, getUserChannelProfile)  //using /c/: --> because we are accessing info in this using params

router.route("/history").get(verifyJWT, getWatchHistory)
export default router