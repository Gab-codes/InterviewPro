"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, usePathname } from "next/navigation";
import dayjs from "dayjs";

interface FeedbackDropdownProps {
  feedbacks: { id: string; createdAt: string }[];
  interviewId: string;
}

export default function FeedbackDropdown({
  feedbacks,
  interviewId,
}: FeedbackDropdownProps) {
  const router = useRouter();
  const pathname = usePathname();

  const parts = pathname.split("/");
  const feedbackId = parts[4] || "";

  const orderedFeedbacks = [...feedbacks].reverse();

  return (
    <Select
      value={feedbackId}
      onValueChange={(newFeedbackId) => {
        router.push(`/interview/${interviewId}/feedback/${newFeedbackId}/`);
      }}
    >
      <SelectTrigger className="w-[80%] sm:w-[280px]">
        <SelectValue placeholder="Select a feedback" />
      </SelectTrigger>
      <SelectContent>
        {orderedFeedbacks.map((feedback, index) => (
          <SelectItem key={feedback.id} value={feedback.id}>
            Interview {index + 1} -{" "}
            {dayjs(feedback.createdAt).format("MMM D, YYYY")}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
