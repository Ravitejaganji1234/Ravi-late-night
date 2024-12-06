'use client'

import React from 'react'
import { motion } from "framer-motion"
import {
  ChartBarIcon,
  NewspaperIcon,
  UserGroupIcon,
  PencilIcon,
  CheckCircleIcon
} from "@heroicons/react/24/outline"


export default function EnhancedDashboard() {

  return (
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-6 dark:from-gray-800 dark:to-gray-900"
      >
        <h1 className="mb-8 text-4xl font-bold text-gray-800 dark:text-white">Employee Dashboard</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Employee Details */}
          <div className="col-span-full rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Employee Details</h2>
              <button className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                <PencilIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-500 text-2xl font-bold text-white">AT</div>
              <div>
                <p className="text-xl font-semibold text-gray-800 dark:text-white">Adarsh.M.Tarikeri</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Employee ID: MTL1012</p>
                <p className="text-sm text-blue-600 dark:text-blue-400">adarsht@middlewaretalents</p>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Performance Metrics</h2>
              <ChartBarIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <div className="space-y-4">
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Productivity</span>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">85%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full w-[85%] rounded-full bg-blue-600" />
                </div>
              </div>
              <div>
                <div className="mb-1 flex justify-between">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Goal Completion</span>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">92%</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div className="h-full w-[92%] rounded-full bg-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Company News */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Company News</h2>
              <NewspaperIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>New project launch next month</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Company picnic scheduled for July 15th</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                <CheckCircleIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                <span>Q3 goals announced - check your email</span>
              </li>
            </ul>
          </div>

          {/* Team Members */}
          <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Team Members</h2>
              <UserGroupIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </div>
            {/* Your team display logic will go here */}
          </div>

          {/* Other sections remain the same */}
        </div>
      </motion.div>
  )
}
