package com.chatly.ws.user;


import lombok.Data;

@Data
public class User {

    private String username;
    private String displayName;
    private String password;


}


// Postmandan user fieldlarını json olarak yollayınca  "Jackson" devreye giriyor ve bu keyleri objeye çeviriyor.