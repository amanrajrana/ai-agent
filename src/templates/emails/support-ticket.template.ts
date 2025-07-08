import { SupportTicket } from "@/prisma/generated/client";

export const supportTicketEmailTemplate = (ticket: SupportTicket) => {
  let priorityClass = "low";

  switch (ticket.priority) {
    case "HIGH":
      priorityClass = "high";
      break;
    case "MEDIUM":
      priorityClass = "medium";
      break;
    case "LOW":
      priorityClass = "low";
      break;
    default:
      priorityClass = "low";
  }

  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Support Ticket</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
    <style>
      body {
        font-family: 'Inter', sans-serif;
        background-color: #f3f4f6;
        margin: 0;
        padding: 40px 0;
        color: #111827;
      }

      .container {
        max-width: 600px;
        margin: auto;
        background: #ffffff;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
        overflow: hidden;
      }

      .header {
        padding: 24px 32px;
        background-color: #111827;
        color: white;
      }

      .header h2 {
        margin: 0;
        font-size: 20px;
        font-weight: 600;
      }

      .section {
        padding: 24px 32px;
        border-bottom: 1px solid #e5e7eb;
      }

      .section:last-child {
        border-bottom: none;
      }

      .label {
        font-weight: 600;
        color: #6b7280;
        font-size: 13px;
        margin-bottom: 4px;
      }

      .value {
        font-size: 15px;
        color: #111827;
        margin-bottom: 16px;
      }

      .badge {
        display: inline-block;
        padding: 4px 10px;
        border-radius: 9999px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
      }

      .badge.low {
        background-color: #e0f2fe;
        color: #0369a1;
      }

      .badge.medium {
        background-color: #fef9c3;
        color: #92400e;
      }

      .badge.high {
        background-color: #fee2e2;
        color: #b91c1c;
      }

      .footer {
        padding: 20px 32px;
        font-size: 13px;
        color: #6b7280;
        background: #f9fafb;
        text-align: center;
      }

      @media (max-width: 640px) {
        .section,
        .header,
        .footer {
          padding: 20px;
        }
      }
    </style>
  </head>

  <body>
    <div class="container">
      <div class="header">
        <h2>New Support Ticket Submitted</h2>
      </div>

      <div class="section">
        <div class="label">Submitted By</div>
        <div class="value">${ticket.studentName} (${ticket.studentEmail})</div>

        <div class="label">Ticket ID</div>
        <div class="value">${ticket.id}</div>
      </div>

      <div class="section">
        <div class="label">Title</div>
        <div class="value">${ticket.title}</div>

        <div class="label">Category</div>
        <div class="value">${ticket.category}</div>

        <div class="label">Priority</div>
        <div class="value">
          <span class="badge ${priorityClass}">${ticket.priority}</span>
        </div>
      </div>

      <div class="section">
        <div class="label">Description</div>
        <div class="value">
          ${ticket.description}
        </div>
      </div>

      <div class="footer">
        &copy; ${new Date().getFullYear()} Internal Support · Auto-generated Email
      </div>
    </div>
  </body>
</html> 
  `;
};
