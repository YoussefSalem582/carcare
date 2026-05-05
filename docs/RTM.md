# Requirements Traceability Matrix (RTM) - CarCare MVP

This RTM maps MVP functional requirements to their design and validation artifacts.

| Req ID | Source / Area | Description | Design Reference | Acceptance Criteria | Status |
|---|---|---|---|---|---|
| R-01 | 3.1 User Management | User can register with email/phone; identity verification (MVP option) | 3.1 | Successful registration, verification flow (if enabled) | Not Started |
| R-02 | 3.1 User Management | User can log in/log out; OAuth (optional) | 3.1 | Login/logout works with email/password; OAuth (if enabled) | Not Started |
| R-03 | 3.1 User Management | RBAC: Customer, Technician, Admin | 3.1 | Access control enforced per role | Not Started |
| R-04 | 3.3 Booking & Scheduling | Booking lifecycle: create/modify/cancel | 3.3 | Booking saved; modifications reflect properly; cancellations allowed | Not Started |
| R-05 | 3.5 Invoicing & Payments | Invoice generation on booking/job; payment via gateway | 3.5 | Invoice created; payment processed; status updated | Not Started |
| R-06 | 3.6 Notifications | Notify on key events (booking, status, invoice) | 3.6 | Notifications triggered and delivered | Not Started |
| R-07 | 3.7 Admin Reporting | Revenue, bookings, utilization metrics | 3.7 | Reports generated with filters | Not Started |

Notes:
- This RTM is a living document and will be updated as requirements evolve.
