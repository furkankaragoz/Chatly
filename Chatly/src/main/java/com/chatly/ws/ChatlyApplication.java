package com.chatly.ws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
@EntityScan("com.chatly.ws")
public class ChatlyApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChatlyApplication.class, args);
    }

}
