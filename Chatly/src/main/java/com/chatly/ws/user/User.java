package com.chatly.ws.user;


import lombok.Data;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String displayName;
    private String password;


}


// Postmandan user fieldlarını json olarak yollayınca  "Jackson" devreye giriyor ve bu keyleri objeye çeviriyor.