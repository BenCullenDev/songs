import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Enter Sandman", duration: "5:31" },
		{ title: "Master of Puppets", duration: "8:35" },
		{ title: "Whiskey in the Jar", duration: "5:04" },
		{ title: "Fade To Black", duration: "6:57" },
		{ title: "Fuel", duration: "4:29" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
