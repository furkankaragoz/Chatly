package com.chatly.ws;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.chatly.ws")
public class ChatlyApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChatlyApplication.class, args);
    }

}
