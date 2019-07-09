package com.archronos.zone.models;

import org.springframework.boot.jackson.JsonComponent;

@JsonComponent
public class Robot {
	// for this we will only have one robot ever used in the code, except in requests
	private static Robot instance = null;
	
	// The Robot's current XY position
	private int[] position = new int[2];
	// The Robot's heading
	private Direction direction = null;
	
	// A flag to know whether this robot has been placed
	private boolean positioned = false;
	
	// The valid directions for the Robot
	public static enum Direction {
		NORTH,
		EAST,
		SOUTH,
		WEST
	}
	
	// prevent the creation of a default Robot except through proper channels
	private Robot() {
		// invalid as default position/heading, until placed
		this.position[0] = -1;
		this.position[1] = -1;
		this.direction = null;
	}
	
	// move the robot one cell depending on direction
	public Robot move() {
		// can only move if we are placed
		if(this.isPlaced()) {
			// work out which direction the robot is facing
			// and move it one in that direction if valid
			switch(this.direction) {
			case NORTH:
				this.position[1] = validatePosition(this.position[1]+1);
				break;
			case EAST:
				this.position[0] = validatePosition(this.position[0]+1);
				break;
			case SOUTH:
				this.position[1] = validatePosition(this.position[1]-1);
				break;
			case WEST:
				this.position[0] = validatePosition(this.position[0]-1);
				break;
			}
		}
		
		// TODO: board checking;
		
		return this;
	}
	
	// pPlace the robot in a certain direction on the grid
	public Robot place(int x, int y, Robot.Direction direction) {
		// place the robot where we were told to
		this.position[0] = x;
		this.position[1] = y;
		this.direction = direction;
		
		// set the flag so we know it has been placed
		this.positioned = true;
		
		return this;
	}
	
	// change Robot direction 90deg left
	public Robot left() {
		if(this.isPlaced()) {
			// work out which direction the robot is facing
			// and move it one in that direction
			switch(this.direction) {
			case NORTH:
				this.direction = Direction.WEST;
				break;
			case EAST:
				this.direction = Direction.NORTH;
				break;
			case SOUTH:
				this.direction = Direction.EAST;
				break;
			case WEST:
				this.direction = Direction.SOUTH;
				break;
			}
		}
		
		return this;
	}
	
	// change Robot direction 90deg right
	public Robot right() {
		if(this.isPlaced()) {
			// work out which direction the robot is facing
			// and move it one in that direction
			switch(this.direction) {
			case NORTH:
				this.direction = Direction.EAST;
				break;
			case EAST:
				this.direction = Direction.SOUTH;
				break;
			case SOUTH:
				this.direction = Direction.WEST;
				break;
			case WEST:
				this.direction = Direction.NORTH;
				break;
			}
		}
		
		return this;
	}
	
	// because it's a square the same fn can be used for both x and y
	private int validatePosition(int i) {
		if(i < 0) {
			return 0;
		} else if(i > 4) {
			return 4;
		}
		
		return i;
	}
	
	// setters
	public void setX(int x) {
		// validate new position
		int validX = this.validatePosition(x);
		
		this.position[0] = validX;
	}
	
	public void setY(int y) {
		//validate new position
		int validY = this.validatePosition(y);
		
		this.position[1] = validY;
	}
	
	// sets the robots current direction
	public void setDirection(Robot.Direction direction) {
		this.direction = direction;
	}
	
	
	// getters - these are exposed as the returns for each JSON request
	public int getX() {
		return this.position[0];
	}
	
	public int getY() {
		return this.position[1];
	}
	
	public Direction getDirection() {
		return this.direction;
	}
	
	// works out if the singleton robot has been placed already
	private boolean isPlaced() {
		return this.positioned;
	}
	
	// Get the main Robot instance, creates if not already done so
	public static Robot get() {
		if(instance == null) {
			instance = new Robot();
		}
		
		return instance;
	}
}
