"use client";

import { Box, Button } from "@mantine/core";
import { DataTable } from "mantine-datatable";
import { NotificationRow } from "./notifications-type";
import { useEffect, useState } from "react";
import supabase from "../database/supabase";
import { usePathname, useRouter } from "next/navigation";

interface INotificationData {
  data: string;
  insights: string;
}

export function NotificationsData() {
  const pathname = usePathname();
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];
  const [notifData, setNotifData] = useState<INotificationData | null>(null);
  const router = useRouter();
  useEffect(() => {
    async function f() {
      const { data, error }: { data: any; error: any } = await supabase
        .from("notifications")
        .select()
        .eq("id", id);

      setNotifData(data[0]);
    }
    f();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "88vh",
        justifyContent: "space-between",
      }}
    >
      <div>
        <h1>Title: {notifData?.data}</h1>
        <h3>
          {notifData?.insights ? notifData?.insights : "No insights available"}
        </h3>
      </div>
      <Button onClick={() => router.back()} style={{ width: 120 }} color="red">
        Back
      </Button>
    </div>
  );
}

export function NotificationsTable() {
  const [data, setData] = useState<NotificationRow[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function f() {
      const { data, error } = await supabase
        .from("notifications")
        .select("id,created_at,data");
      setData(data as any);
    }
    f();
  }, []);
  return (
    <DataTable
      withTableBorder
      borderRadius="sm"
      withColumnBorders
      striped
      highlightOnHover
      records={data}
      onRowClick={({ record, index, event }) => {
        router.push(`notifications/${record.id}`);
      }}
      // define columns
      columns={[
        {
          accessor: "id",
          // this column has a custom title
          title: "ID",
          // right-align column
          textAlign: "right",
        },
        { accessor: "data" },
        {
          accessor: "created_at",

          // this column has custom cell data rendering
        },
      ]}
      // execute this callback when a row is clicked
    />
  );
}
