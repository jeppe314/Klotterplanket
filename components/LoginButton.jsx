import React from "react"
import Link from "next/link"

export default function LoginButton() {
    return <Link href="/api/auth/login">Login</Link>
}


    //    ;<Link href="/api/auth/logout">
    //        <AiOutlineLogout size="50px" color="darkred" />
    //    </Link>

    //    <a href="/api/auth/login">Login</a>