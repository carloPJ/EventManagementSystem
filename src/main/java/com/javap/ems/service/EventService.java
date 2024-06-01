package com.javap.ems.service;

import com.javap.ems.model.Category;
import com.javap.ems.model.Event;
import com.javap.ems.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeParseException;
import java.util.List;
import java.util.stream.Collectors;

// Business-Logik
@Service
public class EventService {

    @Autowired
    private EventRepository repo;

    public List<Event> getRecentNEvents(int n) {
        if (n == - 1) {
            return repo.findAllCustomSorted();
        } else {
            List<Event> recent = repo.findAllByOrderByCreatedDesc();
            return recent.stream().limit(n).collect(Collectors.toList());
        }
    }

    public boolean addEvent(String title, String author, String desc,
                            String loc, String date, String category) {
        if (repo.findByTitle(title).isEmpty()) {
            try {
                LocalDate d = LocalDate.parse(date);
                Category c = Category.valueOf(category);
                Event event = new Event(title, author, desc, loc, d,
                        LocalDate.now(), c, 0, 0);
                repo.save(event);
                return true;
            } catch (DateTimeParseException | IllegalArgumentException e) {
                e.printStackTrace();
                return false;
            }
        } else {
            return false;
        }
    }

    public void createStartingValues() {
        Event event1 = new Event("Gemeinsame Yoga-Session", "Lisa", "Einfach Yoga für alle, die Lust haben!",
                "Innwiese", LocalDate.of(2023, 7, 1),
                LocalDate.of(2023, 6, 30), Category.SPORT,
                4.5f, 100);

        Event event2 = new Event("Jazz Jam Session", "Nick", "Schlagzeug und Keyboard vorhanden",
                "Studio 12", LocalDate.of(2023, 7, 9),
                LocalDate.of(2023, 7, 2), Category.MUSIK,
                3.8f, 50);

        Event event3 = new Event("Japanische Kalligraphie", "Yuna", "Lernt hier die zahlreichen japanischen Schriftzeichen kennen und lieben!",
                "Uni Innstegaula", LocalDate.of(2023, 7, 12),
                LocalDate.of(2023, 7, 5), Category.KUNST,
                4.2f, 80);
        repo.saveAll(List.of(event1, event2, event3));
    }
}
