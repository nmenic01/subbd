import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '@/app/page';

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () { },
        removeListener: function () { }
    };
};

test('renders the Home page with Hero and SocialSection', () => {
    render(<Page />);

    expect(screen.getByRole('heading', { level: 1, name: /VICTORIA BIANCHINI/i })).toBeDefined();

    expect(screen.getByTestId('home-page')).toBeDefined();

    expect(screen.getByText(/Follow our socials/i)).toBeDefined();
});


