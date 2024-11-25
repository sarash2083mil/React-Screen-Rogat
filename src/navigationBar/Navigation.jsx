import React, { lazy, Suspense } from 'react';
import { MdHome } from "react-icons/md";
import { MdDevicesOther } from "react-icons/md";
import {
    FaDashboard,
    FaDevices,
    FaUsers,
    // ... other icons from FontAwesome
} from 'react-icons/fa';
import {
    MdSettings,
    MdLogout,
    // ... other icons from Material Design Icons
} from 'react-icons/md';

import menu from '../jsons/menu';
const navigationData =  menu ;

function Navigation({side}) {
    // const renderIcon = (iconString) => {
    //     // Create a temporary function to return the icon component
    //     const IconComponent = () => {
    //         const iconName = iconString.match(/<(\w+) \/>/)[1];
    //         const DynamicIcon = lazy(() => import(`react-icons/${iconName}`));
    //         return <Suspense fallback={<div>Loading icon...</div>}>
    //             <DynamicIcon />
    //         </Suspense>
    //         // const Icon = require(`react-icons/${iconName}`);
    //         // return <Icon />;
    //     };
    //     return <IconComponent />;
    // };

    const classStr = `float-${side}`;
    return (
        <nav class={classStr}>
            <ul>
                {navigationData.navigation.map(item => (
                    <li key={item.label}>
                        <a href={item.link}>
                            {/* {renderIcon(item.icon)} */}
                            <span><MdHome /></span>
                            {/*<span>{item.icon}</span> */}
                            {item.label}
                        </a>
                        {item.children && (
                            <ul>
                                {item.children.map(child => (
                                    <li key={child.label}>
                                        <a href={child.link}>{child.label}</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
export default Navigation;