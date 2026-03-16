# MediVault – AI Powered Patient Care Coordination System

## Overview

The **Smart Health Portal** is a web-based healthcare platform designed to improve patient care coordination through secure data management and AI-powered assistance. The system centralizes medical records and enables secure communication between patients, doctors, and healthcare administrators.

The platform addresses major healthcare challenges such as fragmented patient data, inefficient record sharing, and limited patient control over medical information. By integrating artificial intelligence, secure authentication, and cloud-based infrastructure, the portal enables patients and healthcare professionals to collaborate more effectively in managing health information.

---

## Problem Statement

Traditional healthcare systems often suffer from fragmented patient records, inefficient communication between providers, and limited patient access to their own medical data. These issues can lead to delayed diagnoses, administrative overhead, and reduced quality of care.

The Smart Health Portal aims to provide a **secure, centralized, and intelligent system** that improves coordination between patients and healthcare providers while maintaining strict privacy and access control.

---

## Key Features

### Patient Interface

* Upload and manage medical documents such as prescriptions and diagnostic reports
* View a centralized record of personal health data
* AI-powered health assistant for preliminary symptom guidance
* Medication reminder system with automated notifications
* Secure OTP-based authorization for doctor access to medical records
* Appointment booking with doctors

### Doctor Interface

* Search patients using unique patient identifiers
* Request access to patient medical records through OTP verification
* Upload prescriptions and clinical documents securely
* Manage working hours and appointment availability
* Track issued prescriptions and patient treatment history

### Administrator Interface

* Verify and manage doctor registrations
* Monitor system usage and activity logs
* Assign and manage user roles
* Ensure compliance with system policies and security standards

---

## System Architecture

The system follows a **modern cloud-based architecture** with clearly separated frontend and backend layers.

**Frontend**

* React
* Vite
* Tailwind CSS

**Backend**

* Supabase (PostgreSQL database)
* Supabase Authentication
* Supabase Realtime

**AI Component**

* Llama 3 Large Language Model for symptom analysis and health guidance

**Security Layer**

* Row-Level Security (RLS)
* Role-Based Access Control (RBAC)
* OTP-based Two-Factor Authentication

The architecture ensures scalability, real-time communication, and strict data privacy controls.

---

## Technology Stack

**Frontend**

* React
* JavaScript
* Vite

**Backend**

* Supabase
* PostgreSQL

**AI Technologies**

* Large Language Models (LLM)
* Natural Language Processing (NLP)

**Security**

* OTP Authentication
* Role-Based Access Control
* Row-Level Security

---

## Core Functionalities

### AI Health Assistant

The portal includes an AI-powered assistant that interprets patient symptom descriptions and provides preliminary health guidance while recommending appropriate medical specialists.

### Secure Record Sharing

Doctors can only access patient medical records when the patient explicitly authorizes access using an OTP verification system.

### Medication Tracking

Patients receive automated reminders to follow their prescribed medication schedule.

### Appointment Scheduling

Patients can view doctor availability and schedule appointments directly through the portal.

### Activity Logging

All system actions such as document uploads and access permissions are logged to maintain transparency and accountability.

---

## Security Features

The platform incorporates several security mechanisms to protect sensitive healthcare data:

* Row-Level Security (RLS) for database protection
* Role-Based Access Control (RBAC)
* OTP-based Two-Factor Authentication
* Encrypted data storage
* Comprehensive activity logs for auditability

These mechanisms ensure compliance with healthcare privacy standards and protect patient information from unauthorized access.

---

## Installation

Clone the repository:

```
git clone https://github.com/SriramKrishnamurthi12/Medivault-Patient-Care-Coordination-Platform.git
```

Navigate to the project directory:

```
cd Medivault-Patient-Care-Coordination-Platform    
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

## Future Enhancements

* Integration with national digital health infrastructures
* Advanced medical analytics and dashboards
* Improved AI diagnostic assistance
* Mobile application support
* Integration with wearable health devices

---

## Authors

Sriram Krishnamurthi
Shreya Verma
Sheik Zakeer Hussain

---

## License

This project was developed for academic and research purposes as part of the Bachelor of Engineering program.
