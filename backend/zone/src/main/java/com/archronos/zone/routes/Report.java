package com.archronos.zone.routes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.archronos.zone.models.Robot;

@RestController
public class Report {

    @RequestMapping("/report")
    public Robot Report() {
    	Robot robot = Robot.get();
    	
        return robot;
    }
}