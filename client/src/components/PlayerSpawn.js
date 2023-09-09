import React from "react";
import Cell from './Cell'

// player1 spawns in 1 of each location
const places1 = [
    {i: 0},
    {i: 1},
    {i: 2},
    {i: 17},
    {i: 18},
    {i: 19},
    {i: 35},
];

const places2 = [
    {i: 14},
    {i: 15},
    {i: 16},
    {i: 31},
    {i: 32},
    {i: 33},
    {i: 49},
];

const getRandomPlace1 = () => {
    const randomIndex = Math.floor(Math.random() * places1.length);
    return places1[randomIndex];
};

const getRandomPlace2 = () => {
    const randomIndex = Math.floor(Math.random() * places2.length);
    return places2[randomIndex];
};


const PlayerSpawn1 = () => {
    const randomPlace = getRandomPlace1();
    return randomPlace;
}

const PlayerSpawn2 = () => {
    const randomPlace = getRandomPlace2();
    return randomPlace;
}



export {PlayerSpawn1, PlayerSpawn2};