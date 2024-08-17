"use client"

import React, { useState, useEffect } from "react";
// import "./styles/header.css";
import styles from "./styles/header.module.css";
import { Menu, User } from "lucide-react";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../ui/navigation-menu";
import { useScrollPosition } from "../../utils/hooks";

const luxuriousMenuItems = [
    'Watches',
    'Jewelry',
    'Cars',
    'Fashion',
    'Real Estate',
    'Technology',
];

export const Header = () => {
    const verticalScrollOffset = useScrollPosition();

    return (
        <div
            className={styles.body}
            style={{
                background: verticalScrollOffset < 50 ? "transparent" : "white"
            }}
        >
            <div
                className={styles.header}
                style={{
                    borderBottomWidth: 1,
                    borderBottomStyle: 'solid',
                    borderBottomColor: verticalScrollOffset < 50 ? "rgba(255, 255, 255, 0.1)" : "#e7e7ed",
                }}
            >
                <div className={styles.rows}>
                    <Menu
                        color={verticalScrollOffset < 50 ? "white" : "black"}
                    />
                    <span
                        className={styles.logo}
                        style={{
                            color: verticalScrollOffset < 50 ? "white" : "black"
                        }}
                    >
                        KEYLEAD
                    </span>
                </div>

                <div className={styles.right_cta_cont}>
                    <button
                        className={styles.sell}
                        style={{ color: verticalScrollOffset < 50 ? "white" : "black" }}
                    >
                        Sell With Us
                    </button>

                    <button
                        className={styles.login}
                        style={{
                            borderWidth: 1,
                            borderStyle: 'solid',
                            borderColor: verticalScrollOffset < 50 ? "white" : "green",
                            color: verticalScrollOffset < 50 ? "white" : "green"
                        }}
                    >
                        <User
                            width={17}
                            height={17}
                            style={{ marginRight: '7px' }}
                            color={verticalScrollOffset < 50 ? "white" : "green"}
                        />
                        Log in
                    </button>
                </div>
            </div>

            <div>
                <NavigationMenu
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <NavigationMenuList
                        className={styles.nav_menu}
                        style={{
                            borderBottomWidth: 1,
                            borderBottomStyle: 'solid',
                            borderBottomColor: verticalScrollOffset < 50 ? "rgba(255, 255, 255, 0.1)" : "#e7e7ed",
                        }}
                    >
                        {
                            luxuriousMenuItems.map((luxuryItem, index) => {
                                return (
                                    <NavigationMenuItem key={index}>
                                        <NavigationMenuTrigger
                                            className={styles.nav_trigger}
                                            style={{
                                                color: verticalScrollOffset < 50 ? "white" : "black"
                                            }}
                                        >
                                            {luxuryItem}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent style={{ width: '100vw', height: '300px', background: 'orange' }}>
                                            <NavigationMenuLink>Link</NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                )
                            })
                        }
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}