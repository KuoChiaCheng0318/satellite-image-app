import axios from "axios";

const instance=axios.create({
    // baseURL: "https://api.themoviedb.org/3",
    baseURL: "https://api.nasa.gov/planetary/earth/assets?",
});

// instance.get('/foo-bar')
// https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2022-01-01&&dim=0.10&api_key=eHsJMoLbnJRXRWlQppSOsaFqt2hy0f04BCR2qRr1

export default instance;