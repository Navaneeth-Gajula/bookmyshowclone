import React, { useEffect, useState, useContext } from 'react';
import MovieLayoutHoc from '../layout/Movie.layout';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MovieContext } from '../context/Movie.context';
import Slider from 'react-slick';
import { FaCcVisa, FaCcApplePay } from 'react-icons/fa';
import PosterSlider from '../components/PosterSlider/PosterSlider.Component';
import MovieHero from '../components/MovieHero/MovieHero.Component';

const MoviePage = () => {
    const {id} = useParams();

    const { movie, setMovie } = useContext(MovieContext);

    const [cast, setCast] = useState();
    const [similarMovies, setSimilarMovies] = useState([]);
    const [recommendedMovies, setRecommendedMovies] = useState([]);

    useEffect(()=>{
        const requestCast = async () => {
            const getCast = await axios.get(`/movie/${id}/credits`);
        setCast(getCast.data.cast);
        };
        requestCast();
    }, [id]);

    useEffect(()=>{
        const requestSimilarMovies = async () => {
            const getSimilarMovies = await axios.get(`/movie/${id}/similar`);
            setSimilarMovies(getSimilarMovies.data.results);
        };
        requestSimilarMovies();
    }, [id]);

    useEffect(()=>{
        const requestRecommendedMovies = async () => {
            const getRecommendedMovies = await axios.get(`/movie/${id}/recommendations`);
            setRecommendedMovies(getRecommendedMovies.data.results);
        };
        requestRecommendedMovies();
    }, [id]);

    useEffect(() => {
        const requestMovie = async () => {
            const getMovie = await axios.get(`/movie/${id}`);
            setMovie(getMovie.data);
        };
        requestMovie();
    }, [id]);

    const settingsCast = {};

    const settings = {};
    

    return (
        <>
        <MovieHero />
        <div className='my-12 container px-4 lg:ml-20 lg:w-2/1'>
        <div className='flex flex-col items-start gap-3'>
            <h1 className='text-gray-800 font-bold gap-3 text-2xl'>About the movie</h1>
            <p>{movie.overview}</p>
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div className='my-8'>
            <h1 className='text-gray-800 font-bold gap-3 text-2xl'>Applicable offers</h1>
            <div className='flex flex-col gap-3 lg:flex-row'>
                <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                    <div className='w-8 h-8'>
                        <FaCcVisa className='w-full h-full' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-gray-700 text-xl font-bold'>Visa Stream Offer</h3>
                        <p className='text-gray-600'>Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                    </div>
                </div>
                <div className='flex items-start gap-2 bg-yellow-100 p-3 border-yellow-400 border-dashed border-2 rounded-md'>
                    <div className='w-8 h-8'>
                        <FaCcApplePay className='w-full h-full' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h3 className='text-gray-700 text-xl font-bold'>Filmy Pass</h3>
                        <p className='text-gray-600'>Get 50% off up to INR 150 on all Visa cards* on BookMyShow Stream.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div className='my-8'>
            <h1 className='text-gray-800 font-bold gap-3 text-2xl'>Cast</h1>
            <Slider {...settingsCast}>
                {cast?.map((castData) => (
                    <div className='flex flex-col items-center'>
                        <div className='w-32 h-32'>
                            <img src={`https://image.tmdb.org/t/p/original${castData.profile_path}`} alt={castData.original_name} className='w-full h-full rounded-full' />
                        </div>
                        <h3 className='text-xl text-gray-800'>{castData.original_name}</h3>
                        <p className='text-sm text-gray-600'>as {castData.character}</p>
                    </div>
                ))}
            </Slider>
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div className='my-8'>
            <PosterSlider posters={similarMovies} title='You might also like' subtitle='' isDark={false} />
        </div>
        <div className='my-8'>
            <hr />
        </div>
        <div className='my-8'>
            <PosterSlider posters={recommendedMovies} title='BMS XCLUSIV' subtitle='' isDark={false} />
        </div>
        </div>
        
        </>
    )
}

export default MovieLayoutHoc(MoviePage);