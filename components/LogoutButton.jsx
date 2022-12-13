import React from "react"
import Link from "next/link"
import { AiOutlineLogout } from "react-icons/ai"

export const LogoutButton = () => {
    return (
        <Link href="/api/auth/logout">
            <AiOutlineLogout size="50px" color="darkred"/>
        </Link>
    )
}
