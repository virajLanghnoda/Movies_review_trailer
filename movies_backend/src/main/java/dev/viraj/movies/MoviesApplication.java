package dev.viraj.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@SpringBootApplication
public class MoviesApplication {

	public static void main(String[] args) {
		SpringApplication.run(MoviesApplication.class, args);
	}

}
@Configuration
class CorsConfig {

	@Bean
	public CorsFilter corsFilter() {
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		CorsConfiguration config = new CorsConfiguration();

		// Allow requests from any origin
		config.addAllowedOrigin("*");

		// Allow all HTTP methods (GET, POST, PUT, DELETE, etc.)
		config.addAllowedMethod("*");

		// Allow specific headers
		config.addAllowedHeader("*");

		source.registerCorsConfiguration("/**", config);
		return new CorsFilter(source);
	}
}