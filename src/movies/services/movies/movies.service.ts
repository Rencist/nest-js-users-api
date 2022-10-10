import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateMovieParams } from 'src/movies/utils/type';
import { Movie } from 'src/typeorm/entities/Movie';
import { Repository } from 'typeorm';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  findMovies() {
    return this.movieRepository.find();
  }

  createMovie(movieDetails: CreateMovieParams) {
    const newMovie = this.movieRepository.create({
      ...movieDetails,
    });
    return this.movieRepository.save(newMovie);
  }
}
