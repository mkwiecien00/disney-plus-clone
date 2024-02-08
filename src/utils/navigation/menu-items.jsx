import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import SearchIcon from '@mui/icons-material/Search'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import LocalMoviesOutlinedIcon from '@mui/icons-material/LocalMoviesOutlined'
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'

export const menuItems = [
	{ text: 'Home', path: '/disney-plus-clone/', icon: <HomeOutlinedIcon /> },
	{ text: 'Search', path: '/disney-plus-clone/search', icon: <SearchIcon /> },
	{ text: 'My List', path: '/disney-plus-clone/mylist', icon: <PlaylistAddIcon /> },
	{ text: 'Movies', path: '/disney-plus-clone/movie', icon: <LocalMoviesOutlinedIcon /> },
	{ text: 'Series', path: '/disney-plus-clone/series', icon: <MovieFilterOutlinedIcon /> },
]
