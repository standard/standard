# Standard Project Governance

<!-- TOC -->

* [Organizers](#organizers)
* [Collaborators](#collaborators)
  * [Collaborator activities](#collaborator-activities)
* [Rule Adoption Committee](#rule-adoption-committee)
* [Consensus seeking process](#consensus-seeking-process)

<!-- /TOC -->

## Organizers

Standard organizers are the organization owners and lead maintainers.
They are the only members of the `@standard/leads` team. The organizers
are the curators of the standard project and their key responsibility
is to issue releases of standard packages and its dependencies.

## Collaborators

Standard collaborators maintain the projects of the standard organization.

They are split into the following teams:

|  Team | Responsibility  |  Repository |
|---|---|---|
| `@standard/leads` | Standard lead maintainers | GitHub organization owners |
| `@standard/core`   |  Standard Core development  |  `standard`, `standard-engine`, `eslint-config-standard`, `eslint-config-standard-with-typescript` |
| `@standard/config`   |  Build, maintain and release standard configs  | `eslint-config-standard`, `eslint-config-standard-with-typescript` |

Every member of the org is also part of `@standard/standard`.

Collaborators have:

* Commit access to the projects repository of the team they belong
* Grant to request/suggest a new release following the [semver](https://semver.org/) model.

Both collaborators and non-collaborators may propose changes to the source code
of the projects of the organization. The mechanism to propose such a change is a
GitHub pull request. Collaborators review and merge (_land_) pull requests
following the [CONTRIBUTING](CONTRIBUTING.md#rules) guidelines.

### Collaborator activities

* Helping users and novice contributors
* Contributing code and documentation changes that improve the project
* Reviewing and commenting on issues and pull requests
* Participation in working groups
* Merging pull requests
* Release configs

## Collaborator nominations

Individuals making significant and valuable contributions to the project may be
a candidate to join the Standard organization.

A collaborator needs to open a private team discussion on GitHub and list the
candidates they want to sponsor with a link to the user's contributions. For
example:

* Activities in the standard organization
  `[USERNAME](https://github.com/search?q=author:USERNAME+org:standard)`

Otherwise, a contributor may self-apply if they believe they meet the above
criteria by reaching out to a lead maintainer privately with the links to their
valuable contributions. The lead maintainers will reply to the Contributor and
will decide if candidate it to be made a collaborator.

The consensus to grant a new candidate collaborator status is reached when:

- at least one of the organizers approve
- at least two of the team members approve

After these conditions are satisfied, the [onboarding
process](CONTRIBUTING.md#onboarding-collaborators) may start.

## Rule Adoption Committee
A subset of collaborators and organizers form the rule adoption committee.
The rule adoption committee has final authority over the rules adopted by standard.
The rule adoption committee is to meet once quarterly to discuss adoption of proposed rules to Standard.
These rules adjustments may be proposed by any member of the community at large and are to be added the
rule adoption committee agenda for discussion during each committee meeting.
Given that the rule adoption committee also consists of members of the standard organization,
other issues may also be discussed as needed.

## Organizer nominations

A team member may be promoted to an organizer only through nomination by a
organizer and with consensus from the rest of organizers.

## Consensus seeking process

The standard organization follows a [Consensus Seeking][] decision-making model.

[Consensus Seeking]:
    https://en.wikipedia.org/wiki/Consensus-seeking_decision-making
