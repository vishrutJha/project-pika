## Project Pika

Base for personalized ChatBot engine integration

## PreRequisites
- MongoDB
- NodeJs
- Ruby

> references - Select OS as necessary

  >- [Steps for installing Rails](https://gorails.com/setup/osx/10.13-high-sierra)
  
  >- [Steps for installing MongoDB](https://docs.mongodb.com/manual/installation/)

## Installation

  1. Set up Backend

  ``` 
    bundle install
  ```

  2. Set up the app - 1st time
  
  ```
    rake db:seed
  ```

  3. For Dev
  Bypass the authentication/authorization for the specific resource by commenting
  ```ruby
    before_action :authenticate_user!
  ```
  where required (controller level)

## Code Rules

- indents at 2 spaces
- Each module is with test cases and automated testing
- Each Pull request is in the form of a card name
  - Card 122 from trello with title "Fix all the X and Y in z" is being worked upon
  - branch name : 122-xy-fixes
  - In case of tasks that aren't a part of a card but need to go into codebase:
    - \<Type of task\>/\<Task name\>
    - Eg: hotfix/bla-working-fix 

- Release Cycle: After first beta (v0.1)
  - Each major with update at first decimal place - Eg: v0.2, v0.3, v0.4
  - each minor with update at 2 decimal places - Eg: v0.2.1 v0.2.2
  - each release to be noted on codebase as a tagged release
