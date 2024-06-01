package com.javap.ems;

import com.javap.ems.service.EventService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
@EntityScan("com.javap.ems")
public class EventmanagementsystemApplication {

	public static void main(String[] args) {

		ConfigurableApplicationContext context = SpringApplication.run(EventmanagementsystemApplication.class, args);
		EventService eventService = context.getBean(EventService.class);
		eventService.createStartingValues();
	}
}