const followModel = require('../models/follow.model');
const userModel = require('../models/user.model');


async function followUserController(req, res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    if(followeeUsername == followerUsername){
        return res.status(400).json({
            message: "You cannot follow yourself"
        })
    }
    const isFolloweeExist = await userModel.findOne({
        username: followeeUsername,
        
    })

    if(!isFolloweeExist) {
        return res.status(404).json({
            message: "User you are trying to follow does not exist"
        })
    }

    const isAllreadyFollowing = await followModel.findOne({
        follower: followerUsername,
        followee: followeeUsername
    })

    if(isAllreadyFollowing) {
        return res.status(400).json({
            message: "You are already following this user"
        })
    }
    const followrecord = await followModel.create({
        follower: followerUsername,
        followee: followeeUsername
    })
    

    res.status(201).json({
        message:`You are following ${followeeUsername}`,
        followrecord
        
    })
}


// async function unfollowUserController(req, res) {
//     const followerUsername = req.user.username
//     const followeeUsername = req.params.username

//     const isUserFollowing = await followModel.findOne({
//         follower: followerUsername,
//         followee: followeeUsername
//     })
//     res.status(200).json({
//         message: `You have unfollowed ${followeeUsername}`
//     })
//     const unfollow =await followModel.findOneAndDelete({isUserFollowing,
//     follower: followerUsername,
//     followee: followeeUsername
// })
// }



module.exports = {
    followUserController,
    // unfollowUserController
}