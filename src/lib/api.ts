import Cookies from "js-cookie";

const API_URL = "http://localhost:5000/api";

interface LoginData {
  email: string;
  password_hash: string;
}

interface SignupData {
  email: string;
  password_hash: string;
  full_name: string;
  role: string;
}

export const login = async (data: LoginData) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

export const signup = async (data: SignupData) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Signup failed");
  }

  return response.json();
};

export const getCourses = async () => {
  const response = await fetch(`${API_URL}/courses`);
  if (!response.ok) {
    throw new Error("Failed to fetch courses");
  }
  return response.json();
};

export const getCourseById = async (id: string) => {
  const response = await fetch(`${API_URL}/courses/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch course");
  }
  return response.json();
};

export const getJobs = async () => {
  const response = await fetch(`${API_URL}/jobs`);
  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }
  return response.json();
};

export const getJobById = async (id: string) => {
  const response = await fetch(`${API_URL}/jobs/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch job");
  }
  return response.json();
};

export const getInternships = async () => {
  const response = await fetch(`${API_URL}/internships`);
  if (!response.ok) {
    throw new Error("Failed to fetch internships");
  }
  return response.json();
};

export const getInternshipById = async (id: string) => {
  const response = await fetch(`${API_URL}/internships/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch internship");
  }
  return response.json();
};

export const getDashboardData = async () => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/users/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return response.json();
};

export const enrollCourse = async (id: string) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/user-courses/${id}/enroll`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to enroll in course");
  }

  return response.json();
};

export const getRecruiterApplications = async () => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/applications/recruiter`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch applications");
  }

  return response.json();
};

export const acceptJobApplication = async (id: string) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/applications/jobs/${id}/accept`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to accept job application");
  }

  return response.json();
};

export const rejectJobApplication = async (id: string) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/applications/jobs/${id}/reject`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to reject job application");
  }

  return response.json();
};

export const acceptInternshipApplication = async (id: string) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/applications/internships/${id}/accept`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to accept internship application");
  }

  return response.json();
};

export const rejectInternshipApplication = async (id: string) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/applications/internships/${id}/reject`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to reject internship application");
  }

  return response.json();
};

export const getInstructorCourses = async () => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/instructor/courses`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch instructor courses");
  }

  return response.json();
};

interface UpdateProfileData {
  full_name?: string;
  phone_number?: string;
}

export const updateProfile = async (data: UpdateProfileData) => {
  const token = Cookies.get("jwtToken");
  if (!token) {
    throw new Error("Not authorized");
  }

  const response = await fetch(`${API_URL}/users/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to update profile");
  }

  return response.json();
};

export const getListFilterOptions = async (resource: string, filter: string) => {
  const response = await fetch(`${API_URL}/${resource}/list?filter=${filter}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${filter} for ${resource}`);
  }
  return response.json();
};

interface FilterParams {
  limit?: number;
  offset?: number;
  category?: string; // For courses
  skillLevel?: string;
  providedBy?: string; // For courses
  mode?: string; // For courses
  company?: string; // For internships and jobs
  title?: string; // For internships and jobs
  location?: string; // For internships
  workMode?: string; // For internships
  paid_unpaid?: string; // For internships
  jobCategory?: string; // For jobs
  jobLocation?: string; // For jobs
  jobTime?: string; // For jobs
  jobType?: string; // For jobs
  experience_required?: string; // For jobs
  sortBy?: string;
  order?: 'ASC' | 'DESC';
}

export const getFilteredItems = async (resource: string, filters: FilterParams) => {
  const query = new URLSearchParams();
  for (const key in filters) {
    if (filters[key as keyof FilterParams]) {
      query.append(key, String(filters[key as keyof FilterParams]));
    }
  }

  const response = await fetch(`${API_URL}/${resource}?${query.toString()}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch filtered ${resource}`);
  }
  return response.json();
};
