const {
  UserAuthController,
} = require("../../http/controller/User/Auth/auth.controller");
const router = require("express").Router();
/**
 * @swagger
 *  tags:
 *     name: USer-Authentication
 *     description: user_auth section
 */
/**
 * @swagger
 *   /user/get-otp:
 *      post:
 *        tags: [User_Athentication]
 *        summary: login user in userpanel with phonenumber
 *        description: one time password(OTP)login
 *        parameters:
 *        -  name: mobile
 *           description: fa-IRI phonenumber
 *           in: formData
 *           required: true
 *           type: string
 *        responses:
 *                200:
 *                  description: Sucsess
 *                404:
 *                  description: Bad Request
 *                500:
 *                  description: Internal Server Error
 */
router.post("/get-otp", UserAuthController.GetOtp);
/**
 * @swagger
 *   /user/check-otp:
 *      post:
 *        tags: [UserAuthController]
 *        summary: check-otp value in user controller
 *        description: check-otp with code-mobile and expires date
 *        parameters:
 *        -    name: mobile
 *             description: fa-IRI phonenumber
 *             in: formData
 *             required: true
 *             type: string
 *        -    name: code
 *             description: enter sms code
 *             in: formData
 *             required: true
 *             type: string
 *        responses:
 *                200:
 *                  description:  success
 *                404:
 *                  description:  Bad Request
 *                500:
 *                  description: InternalServerError
 *
 */
router.post("/check-otp", UserAuthController.CheckOtp);
/**
 * @swagger
 *   /user/refresh-token:
 *      post:
 *          tags: [UserAuthController]
 *          summary: send refresh token for get new token and refreshtoken
 *          description: refresh token
 *          parameters:
 *          -    in: formData
 *               required: true
 *               type: string
 *               name: refreshToken
 *          responses:
 *                  200:
 *                    description: success
 */
router.post("/refresh-token", UserAuthController.RefreshToken);
module.exports = {
  UserAuthRouter: router,
};
