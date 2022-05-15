const express = require('express');
const { getAllUsers,
        changeUserStatus,
        getAllEvents,
        changeEventStatus,
        deleteEvent,
        getAllComments,
        deleteComment,
        eventSeenByAdmin,
        getUnseenEvents,
        getMostCommentedEvents,
        getUsersGroupedByCreatedDates,

} = require('../controller/adminController');
const router = express.Router();
const {isAuthenticatedUser,authorizeRoles} = require('../middlewares/auth')


router.route('/admin/users').get(isAuthenticatedUser,authorizeRoles('Admin'),getAllUsers);
router.route('/admin/user/:id/:status').put(isAuthenticatedUser,authorizeRoles('Admin'),changeUserStatus);
router.route("/admin/users/groupedbycreatedDates").get(isAuthenticatedUser,authorizeRoles('Admin'),getUsersGroupedByCreatedDates);
router.route('/admin/events').get(isAuthenticatedUser,authorizeRoles('Admin'),getAllEvents);
router.route('/admin/event/:id/:status').put(isAuthenticatedUser,authorizeRoles('Admin'),changeEventStatus);
router.route('/admin/event/:id').delete(isAuthenticatedUser,authorizeRoles('Admin'),deleteEvent);
router.route('/admin/events/seen/:id').put(isAuthenticatedUser,authorizeRoles('Admin'),eventSeenByAdmin);
router.route('/admin/events/unseen').get(isAuthenticatedUser,authorizeRoles('Admin'),getUnseenEvents);
router.route("/admin/events/mostcommented").get(isAuthenticatedUser,authorizeRoles('Admin'),getMostCommentedEvents);
router.route('/admin/comments').get(isAuthenticatedUser,authorizeRoles('Admin'),getAllComments);
router.route('/admin/comment/:id').delete(isAuthenticatedUser,authorizeRoles('Admin'),deleteComment);

module.exports = router;