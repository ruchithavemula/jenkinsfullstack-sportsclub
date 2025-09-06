package com.sportsclub.backend.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name="members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String membership_type;
    private Date join_date;

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getMembership_type() { return membership_type; }
    public void setMembership_type(String membership_type) { this.membership_type = membership_type; }

    public Date getJoin_date() { return join_date; }
    public void setJoin_date(Date join_date) { this.join_date = join_date; }
}
