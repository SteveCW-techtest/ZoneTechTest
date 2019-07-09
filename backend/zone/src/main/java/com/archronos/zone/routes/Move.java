package com.archronos.zone.routes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.archronos.zone.models.Robot;

@RestController
public class Move {

    @RequestMapping("/move")
    public Robot move() {
    	Robot robot = Robot.get();
    	
    	robot.move();
    	
        return robot;
    }
}