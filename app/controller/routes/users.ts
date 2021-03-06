import { Router } from "express"
import * as controller from "../users"

const router = Router()

/* 
    Define routes and specify a controller function 
    to handle requests to that route.
 */
router.get("/", controller.index)
router.get("/login", controller.getLoginForm)
router.get("/signup", controller.getSignupForm)
router.post("/login", controller.login)
router.post("/signup", controller.signup)

export default router
