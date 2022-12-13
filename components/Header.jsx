import React from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import Image from "next/image"
import LoginButton from "../components/LoginButton"
import { LogoutButton } from "../components/LogoutButton"

export const Header = () => {
    const { user, error, password } = useUser()

    return (
        <div className="header">
            <div className="logo">
                <h1>JEPPES KLOTTERPLANK</h1>
            </div>
            <div className="nav">
                {user && (
                    <Image
                        src={user.picture}
                        alt="Profile picture"
                        width={50}
                        height={50}
                    />
                )}
                {!user ? <LoginButton /> : <LogoutButton />}
            </div>
        </div>
    )
}
