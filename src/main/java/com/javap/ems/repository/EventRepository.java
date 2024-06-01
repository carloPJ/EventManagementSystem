package com.javap.ems.repository;
import com.javap.ems.model.Event;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface EventRepository extends CrudRepository<Event, Integer> {
    List<Event> findByTitle(String title);
    List<Event> findAllByOrderByCreatedDesc();
    @Query("SELECT e FROM Event e WHERE e.title NOT IN " +
            "(SELECT e2.title FROM Event e2 ORDER BY e2.likes DESC LIMIT 3) " +
            "ORDER BY e.created DESC LIMIT 17")
    List<Event> findAllExceptTop3Likes();
    List<Event> findTop3ByOrderByLikesDesc();
    default List<Event> findAllCustomSorted() {
        List<Event> a = findTop3ByOrderByLikesDesc();
        List<Event> b = findAllExceptTop3Likes();
        List<Event> combined = new ArrayList<>();
        combined.addAll(a);
        combined.addAll(b);
        return combined;
    }
}