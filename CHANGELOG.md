# Changelog
All notable changes to this project will be documented in this file.

Date format is YYYY/MM/DD

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2] - 2020/05/19
### Added
- Database factory, configuration and Mongo connection
- CODEOWNERS and PR template

## Updated
- CI flow to run specific jobs in parallel
- README to include badges and basic info

## [0.1.1] - 2020/05/09
### Added
- Initial commit
- Added linting rules
- Added testing framework
- Added build step into CI
- Added travis configuration file
- Added static code analysis configuration file
- Added abstract controller
- Added bunyan logger
- Added Loggly integration for centralised logging
- Added HTTP context in middleware for correlation ID

### Removed
- Removed unused unit tests
