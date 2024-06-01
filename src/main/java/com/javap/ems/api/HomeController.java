package com.javap.ems.api;

import com.javap.ems.model.Event;
import com.javap.ems.repository.EventRepository;
import com.javap.ems.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// Manueller Zugriff auf Datenbank: http://localhost:8080/h2-console
@Controller
@RequestMapping("/")
public class HomeController {

    @Autowired
    EventRepository repo;

    @Autowired
    EventService service;

    @GetMapping
    public String getIndexPage(Model model) {
        List<Event> events = repo.findAllCustomSorted();
        model.addAttribute("events", events);
        return "index";
    }

    @PostMapping
    public String addEvent(@RequestParam("title") String title,
                           @RequestParam("author") String author,
                           @RequestParam("desc") String desc,
                           @RequestParam("loc") String loc,
                           @RequestParam("date") String date,
                           @RequestParam("category") String category) {
        service.addEvent(title.trim(), author.trim(), desc.trim(), loc.trim(),
                date.trim(), category.trim());
        return "redirect:/";
    }
}