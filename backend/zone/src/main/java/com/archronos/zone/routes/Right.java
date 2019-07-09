package com.archronos.zone.routes;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.archronos.zone.models.Robot;

@RestController
public class Right {

    @RequestMapping("/right")
    public Robot right() {
    	Robot robot = Robot.get();
    	
    	robot.right();
    	
        return robot;
    }
}