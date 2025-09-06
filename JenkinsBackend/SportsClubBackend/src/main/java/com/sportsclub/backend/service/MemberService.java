package com.sportsclub.backend.service;

import com.sportsclub.backend.model.Member;
import com.sportsclub.backend.repository.MemberRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository repository;

    public MemberService(MemberRepository repository) {
        this.repository = repository;
    }

    public List<Member> getAllMembers() {
        return repository.findAll();
    }

    public Member saveMember(Member member) {
        return repository.save(member);
    }

    public Optional<Member> getMemberById(Long id) {
        return repository.findById(id);
    }

    public void deleteMember(Long id) {
        repository.deleteById(id);
    }
}
