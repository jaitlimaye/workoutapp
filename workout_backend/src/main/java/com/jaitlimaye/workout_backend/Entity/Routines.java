package com.jaitlimaye.workout_backend.Entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Routines {
    @Id
    @GeneratedValue
    private Integer id;

    private String date;
    private Integer usrid;
    private Integer ex_id;
    private boolean part_of_set;
    private Integer st_id;
    private boolean isbar;
    private Integer wt;
    private boolean twosides;
    private Integer wt_l;
    private Integer wt_r;
    private Integer reps;

    private transient String ex_name;
    public Routines() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getEx_name() {
        return ex_name;
    }

    public void setEx_name(String ex_name) {
        this.ex_name = ex_name;
    }

    public Integer getEx_id() {
        return ex_id;
    }

    public void setEx_id(Integer ex_id) {
        this.ex_id = ex_id;
    }

    public Integer getUsrid() {
        return usrid;
    }

    public void setUsrid(Integer usrid) {
        this.usrid = usrid;
    }

    public boolean isPart_of_set() {
        return part_of_set;
    }

    public void setPart_of_set(boolean part_of_set) {
        this.part_of_set = part_of_set;
    }

    public Integer getSt_id() {
        return st_id;
    }

    public void setSt_id(Integer st_id) {
        this.st_id = st_id;
    }

    public boolean isIsbar() {
        return isbar;
    }

    public void setIsbar(boolean isbar) {
        this.isbar = isbar;
    }

    public Integer getWt() {
        return wt;
    }

    public void setWt(Integer wt) {
        this.wt = wt;
    }

    public boolean isTwosides() {
        return twosides;
    }

    public void setTwosides(boolean twosides) {
        this.twosides = twosides;
    }

    public Integer getWt_l() {
        return wt_l;
    }

    public void setWt_l(Integer wt_l) {
        this.wt_l = wt_l;
    }

    public Integer getWt_r() {
        return wt_r;
    }

    public void setWt_r(Integer wt_r) {
        this.wt_r = wt_r;
    }

    public Integer getReps() {
        return reps;
    }

    public void setReps(Integer reps) {
        this.reps = reps;
    }
}
