package com.api.consumoFront.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{
    public void addCorsMappings(CorsRegistry registry){
        registry.addMapping("/clientes**")
        .allowedOrigins("/http://localhost:8080/**")
        .allowedMethods("*");

        /*registry.addMapping("clientes/cadastrar")
        .allowedOrigins("/http://localhost:8080")
        .allowedMethods("POST");

        registry.addMapping("clientes/todos")
        .allowedOrigins("/http://localhost:8080")
        .allowedMethods("POST", "GET");

        registry.addMapping("clientes/**")
        .allowedOrigins("/http://localhost:3000/**")
        .allowedMethods("POST", "GET");*/
    }
}
