package com.archronos.zone.routes;

import java.util.concurrent.atomic.AtomicLong;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.archronos.zone.models.Robot;

@RestController
public class Place {
    // lets have a GET PLACE to return current location
    @GetMapping("/place")
    public Robot place() {
    	Robot robot = Robot.get();
    	
    	robot.place(0, 0, Robot.Direction.NORTH);
    	
        return robot;
    }
    
    @PostMapping("place")
    public Robot place(@RequestBody Robot robotDetails) {
    	Robot robot = Robot.get();
    	
    	robot.place(robotDetails.getX(), robotDetails.getY(), robotDetails.getDirection());
    	
    	return robot;
    }
}