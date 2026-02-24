package com.example.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController {

    @GetMapping("/")
    public String hello() {
        System.out.println("Hello page requested");   // ✅ Added line

        return "index";   // returns index.html
    }
}