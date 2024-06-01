package com.javap.ems.api;

import com.javap.ems.model.Event;
import com.javap.ems.repository.EventRepository;
import com.javap.ems.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/events")
public class EventController {

    @Autowired
    private EventRepository repo;

    @Autowired
    private EventService service;

    @GetMapping
    public List<Event> getEvents(@RequestParam(defaultValue = "-1") int n) {
        return service.getRecentNEvents(n);
    }
}
