import MyGroupLayout from "../layout/MyGroupLayout";
import CreateGroup from "../pages/CreateGroup";
import CreateTask from "../pages/CreateTask";
import SignUp from "../pages/SignUp";
import Members from "../pages/my group/Members";
import MyGroup from "../pages/my group/MyGroup";
import Task from "../pages/my group/Task";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");
const { default: SignIn } = require("../pages/SignIn");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/createGroup',
                element: <CreateGroup></CreateGroup>
            },
            {
                path: '/createTask',
                element: <CreateTask></CreateTask>
            },
            {
                path: '/task',
                element: <Task></Task>
            }
            // {
            //     path: '/myGroup',
            //     element: <MyGroup></MyGroup>
            // },
            // {
            //     path: '/myGroup/:memberId',
            //     element: <Members></Members>,
            //     loader: ({ params }) => {
            //         return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`)
            //     }
            // }


        ]
    },
    {
        path: '/myGroup',
        element: <MyGroupLayout></MyGroupLayout>,
        children: [
            {
                path: '/myGroup/:memberId',
                element: <Members></Members>,
                loader: ({ params }) => {
                    return fetch(`https://jsonplaceholder.typicode.com/users/${params.memberId}`)
                }
            },

        ]
    }
])
export default router;