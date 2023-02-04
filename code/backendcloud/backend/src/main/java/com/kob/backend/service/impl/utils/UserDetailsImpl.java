package com.kob.backend.service.impl.utils;

import com.kob.backend.pojo.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDetailsImpl implements UserDetails {
    private User user;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    // 判断帐号是否没有过期
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // 是否没有被封号
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // 用户凭证是否没有过期
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 用户是否被启用
    @Override
    public boolean isEnabled() {
        return true;
    }
}
