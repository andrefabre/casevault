# Code Citations

## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
```


## License: unknown
https://github.com/defnededa/personal-website/blob/3eca203eb63b9c54e3d92f8393aaa203f079a4c1/doodles/draw/LICENCE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/defnededa/personal-website/blob/3eca203eb63b9c54e3d92f8393aaa203f079a4c1/doodles/draw/LICENCE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/defnededa/personal-website/blob/3eca203eb63b9c54e3d92f8393aaa203f079a4c1/doodles/draw/LICENCE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/defnededa/personal-website/blob/3eca203eb63b9c54e3d92f8393aaa203f079a4c1/doodles/draw/LICENCE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: BSD-3-Clause
https://github.com/rubinius/rubinius/blob/84368419a49767ef9549a5778812e5f54b6c6223/build/libraries/libffi/src/powerpc/ppc_closure.S

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: MIT
https://github.com/jamesgolick/enum_field/blob/bff7873bd0c48753a93f46e71f517da69fd5c7ce/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/jnewland/lazy_record/blob/dff088eb8c5aed549bfbced20feded285fcc875c/MIT-LICENSE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```


## License: unknown
https://github.com/defnededa/personal-website/blob/3eca203eb63b9c54e3d92f8393aaa203f079a4c1/doodles/draw/LICENCE

```
This is very helpful. Based on what you've shared, here's the clarified licensing strategy:

## Licensing Recommendations

**Primary approach:**
- MIT License for all custom code (Flask app, scripts, HTML/CSS/JS modifications)
- Custom copyright notice for your written content (proposal rationale, descriptions)
- Acknowledgements section crediting open-source components

**Components needing attribution:**

| Component | Licence | Why | Mention? |
|-----------|---------|-----|----------|
| Nginx | 2-Clause BSD | Open source web server | Yes |
| Flask | 3-Clause BSD | Open source Python framework | Yes |
| SQLite | Public Domain | Open source database | Yes (courtesy) |
| Bootstrap | MIT | CSS framework (in your HTML/CSS) | Yes |
| Google Fonts | OFL / Apache 2.0 | Font service (in your HTML `<link>`) | Yes |
| Azure | Proprietary | Hosting service (like AWS) | No |
| GitHub Copilot | Proprietary | Development tool (like an IDE) | No |
| GoDaddy | Proprietary | Domain registrar | No |
| Self-created images | Your own | No third-party IP | No |

**No gaps identified.** Your approach is sound: you're learning, testing, and modifying code yourself—Copilot is a tutor/guide, not the source of distribution.

---

## Recommended HTML Acknowledgements Block

Replace your current "Rational for Copyright Licence" section with this structure:

```html
<!-- Licence Rationale & Acknowledgements -->
<section class="light-partner">
    <div class="container">
        <div class="about-text">
            <!-- Licence Rationale -->
            <h2 class="section-title">Licence Rationale</h2>
            <p>
I have selected the MIT License for this ICT171 project because it provides a clear, widely accepted permission model for source code reuse while keeping attribution and liability terms explicit. This project is educational, portfolio-facing, and intended to demonstrate practical cloud, security, and documentation capability, so a permissive licence supports transparency and peer learning. MIT also aligns with common open source practice and is easy for assessors and future reviewers to understand. All original project code is licensed under MIT, while third-party assets licensed separately are acknowledged below and in project documentation.
            </p>

            <!-- Visible Licence Marking -->
            <p style="margin-top: 1.5rem; padding: 0.75rem; background-color: #f0f0f0; border-left: 4px solid #007bff; font-weight: 600;">
                <strong>Licence:</strong> This project code is licensed under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License</a>.
            </p>

            <!-- Acknowledgements -->
            <h3 style="margin-top: 2rem; margin-bottom: 1rem;">Third-Party Components & Acknowledgements</h3>
            <p>This project uses the following open-source and third-party components:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin-top: 1rem;">
                <thead>
                    <tr style="background-color: #f5f5f5; border-bottom: 2px solid #ddd;">
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Component</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Licence</th>
                        <th style="padding: 0.75rem; text-align: left; border: 1px solid #ddd;">Notes</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Nginx</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://nginx.org/LICENSE" target="_blank">2-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Web server</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Flask</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://flask.palletsprojects.com/license/" target="_blank">3-Clause BSD</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Python web framework</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>SQLite</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://www.sqlite.org/copyright.html" target="_blank">Public Domain</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Embedded SQL database</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Bootstrap</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://github.com/twbs/bootstrap/blob/main/LICENSE" target="_blank">MIT License</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">CSS framework (modified)</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #ddd;">
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><strong>Google Fonts</strong></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;"><a href="https://scripts.sil.org/OFL" target="_blank">OFL 1.1</a> / <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2.0</a></td>
                        <td style="padding: 0.75rem; border: 1px solid #ddd;">Font service (Inter)</td>
                    </tr>
                </tbody>
            </table>

            <p style="margin-top: 1.5rem; font-size: 0.9rem; color: #666;">
                <strong>Note:</strong> Original written content (project proposal, descriptions, architecture notes) is copyright © 2026 Andre Fabre. All rights reserved for written content unless otherwise noted. Code contributions are licensed under MIT. For full licence details, see the repository LICENSE file.
            </p>
        </div>
    </div>
</section>
```

---

## What to Add to Your Repository Root

Create or update your `LICENSE` file to:

```
MIT License

Copyright (c) 2026 Andre Fabre

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

---

THIRD-PARTY ACKNOWLEDGEMENTS:

This project incorporates the following third-party open-source components:

- Nginx: Licensed under the 2-Clause BSD License (https://nginx.org/LICENSE)
```

